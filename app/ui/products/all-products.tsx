'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '@/app/lib/definitions'
import { formatCurrency } from '@/app/lib/utils'

export default function AllProducts({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    console.log({ searchTerm })
  }

  return (
    <>
      <input onChange={handleChange} value={searchTerm} />
      {products
        .filter((product: Product) => product.name.includes(searchTerm))
        .map((product: Product) => (
          <div key={product.id} className="rounded-lg bg-slate-800">
            <Link href={`/products/${product.id}`}>
              <div className="">
                <Image
                  alt={product.name}
                  src={product.image}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg w-[400px] h-[300px]"
                />
              </div>
              <h2 className="font-bold">{product.name}</h2>
              <p>{formatCurrency(product.price)}</p>
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
    </>
  )
}
