import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/product-grid";

export default function Sale() {
	return (
		<section className='m-20'>
			<h1 className='text-3xl font-bold mb-4'>Vendas</h1>
      <ProductGrid>
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
      </ProductGrid>
    </section>
	)
}