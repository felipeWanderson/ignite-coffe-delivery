import { Intro } from '../../components/Intro'
import { ProductListing } from '../../components/ProductListing'

const products = [
  {
    id: '1',
    image_url: '/src/assets/images/coffe-expresso-tradicional.png',
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    stock: 20,
  },
  {
    id: '2',
    image_url: '/src/assets/images/coffe-americano.png',
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    stock: 20,
  },
  {
    id: '3',
    image_url: '/src/assets/images/coffe-expresso-cremoso.png',
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    stock: 20,
  },
  {
    id: '4',
    image_url: '/src/assets/images/cafe-gelado.png',
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    stock: 20,
  },
  {
    id: '5',
    image_url: '/src/assets/images/cafe-com-Leite.png',
    tags: ['Tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    stock: 20,
  },
  {
    id: '6',
    image_url: '/src/assets/images/coffe-latte.png',
    tags: ['Tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    stock: 20,
  },
  {
    id: '7',
    image_url: '/src/assets/images/capuccino.png',
    tags: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    stock: 20,
  },
  {
    id: '8',
    image_url: '/src/assets/images/macchiato.png',
    tags: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    stock: 20,
  },
  {
    id: '9',
    image_url: '/src/assets/images/mochaccino.png',
    tags: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    stock: 20,
  },
  {
    id: '10',
    image_url: '/src/assets/images/chocolate-quente.png',
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    stock: 20,
  },
  {
    id: '11',
    image_url: '/src/assets/images/cubano.png',
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    stock: 20,
  },
  {
    id: '12',
    image_url: '/src/assets/images/havaiano.png',
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    stock: 20,
  },
  {
    id: '13',
    image_url: '/src/assets/images/arabe.png',
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    stock: 20,
  },
  {
    id: '14',
    image_url: '/src/assets/images/irlandes.png',
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    stock: 20,
  },
]

export function Home() {
  return (
    <>
      <Intro />
      <ProductListing products={products} />
    </>
  )
}
