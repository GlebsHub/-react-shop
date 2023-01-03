 
004 - show the list of goods to the VITRINA
[x] postman +new request, save - create request
[x] add link materializecss in index.html
[x] add link materializecss-icons in index.html
[x] Header.jsx
[x] Footer.jsx
[x] create style in index.css
[x] .env.local put to the highest level of app
[x] config.jsx
[x] Shop.jsx
[x] in Shop.jsx useState and useEffect
[x] Preloader.jsx layout from materializecss preloader.html
[x] add Preloader.jsx to Shop.jsx
[x] GoogsList.jsx
[x] GoodsItem.jsx
[x] add style for 'card'

005-006 - create order and baskets icon
[] Cart.jsx and add styles
[] materializecss choose icon basket
const [order, setOrder] = useState([]) in Shop
[] create funcrion addOrder: 
- logic: создать ф-ю addOrder для добавления 
- товара при нажатии кнопки. Ф-ю покинуть 
- через пропсы в GoodsItem и повесить 
- на кнопку buy. 
- addOrder принимает парам item(id, name, price)
- усделать проверку: 'есть ли в текущем стейте 
- тот товар, на который мы кликнули. Это для того,
- чтобы не создавать новый.
1) setOrder([...order, newItem])
2) НО ПЕРЕД setOrder создадим 
3) newItem - объект с инфой о количестве
4) const newItem = {
   ...item,
   quantity: 1,
   }
5) Это сценарий, котгда товар добавляеся первый раз
6) Делаем проверку: Создаем 
7) const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
- т.о. в itemIndex будут индексы совпавших адишников
- если айдишники совпадают, то получааем интекс, иначе -1
- следов-но делаем проверку:
- if (itemIndex < 0) если добавляем эль-т первый раз, то
- const newItem = {
  ...item,
  quantity: 1,
  }
  setOrder([...order, newItem])
- если 0(т.е. первый элемент массива) то
- нужно найти эл-т и добавить его quantity
- путем перебора массива 
- else {
  const newOrder = order.map((orderItem, index) => {
  if(index === itemIndex) {
  return {
  ...orderItem,
  quantity: orderItem.quantity +  1
  }
  } else {
  return orderItem;
  }
  })
            setOrder(newOrder)
        }

007- создание корзины, пересчет суммы заказа в корзине
- ф-я обновления заказов, удаление товара из корзины
- корзина либо открыта либо закрыта, нужен стейт -isBasketShow
- ф-я handleBasketShow. Прокинем ее в Cart.jsx 
- BasketList, BasketItem - корзина в виде списка из materialize -> collections
- стили на крестик в BasketList 

008 - удаление товара при нажатии на крестик
removeOrder

009 - изменение количества товара в корзине