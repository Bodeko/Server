<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Categories;
use App\Http\Requests\ProductStoreRequest;
use App\Repositories\ProductRepository;



class ProductController extends Controller
{
    private $repository;
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->repository->products();
        return $products;
        // return view('product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Categories::all();

        return view('product.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductStoreRequest $request, Product $product)
    {
        $data = $request->validated();

        $this->repository->store($data);

        return redirect('/categories/'.request('category_id'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = $this->repository->find($id);
        return $product;
        // return(view('product.show', compact('product')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = $this->repository->find($id);

        $currentCategory = $product->category;
        
        $categories = Categories::all();


        return view('product.edit', compact('product', 'currentCategory', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductStoreRequest $request, $id)
    {
        $data = $request->validated();
        $this->repository->update($data, $id);
        return redirect('/products/'.$id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category_id = $this->repository->delete($id);
        return redirect('categories/'.$category_id);
    }
}
