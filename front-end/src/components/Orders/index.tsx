import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63752943eed5cd1b4e41c14c',
    'table': '12',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668618473998-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 5,
        '_id': '63752943eed5cd1b4e41c14d'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668619247435-coca-cola.png',
          'price': 7,
        },
        'quantity': 3,
        '_id': '63752943eed5cd1b4e41c14e'
      }
    ],
  },
  {
    '_id': '6375236c4d68645b2b9661ed',
    'table': '12',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668618473998-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6375236c4d68645b2b9661ee'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668619247435-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6375236c4d68645b2b9661ef'
      },
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668618473998-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6375236c4d68645b2b9661ee2'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668619247435-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6375236c4d68645b2b9661ef2'
      },
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon='⌚'
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto!'
        orders={[]}
      />
    </Container>
  );
}
