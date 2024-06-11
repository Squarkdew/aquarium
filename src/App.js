import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Autorization from "./components/Autorization/Autorizatuion"
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
function App() {

  const fish = [
    {
      id: 1,
      fish_images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2sMTbV_ITYAb7Fwh_vOKD0QAPY83pc09VA&s",
      name: "Сом",
      description: "крупная рыба семейства Сомовые, отличающаяся отсутствием чешуи. Длина такой рыбы может достигать 5 метров, а вес до 300 килограмм.",
      price: "250 сом",
      slug: "Крупный",
      category: "Рыба"
    },
    {
      id: 2,
      fish_images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXC8UmleKRD3J5igQW33qOm9hJL-hxVZjGQ&s",
      name: "Форель",
      description: "У форели удлиненное тело разных оттенков и характерные черные пятнышки на спине, голове и плавниках. Мясо у всех разновидностей этой рыбы имеет розоватый оттенок; у некоторых видов это более заметно, чем у других. В нашей стране форель встречается обычно в бассейнах Балтийского, Черного и Каспийского моря.",
      price: "300 сом",
      slug: "Маленький",
      category: "Рыба"
    },
    {
      id: 3,
      fish_images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXq3jyevWNAwkIm3vp1qxvUspBFlcdAkifg&s",
      name: "Окунь",
      description: "Окунь красиво и ярко окрашен: темно-зеленая спина, зеленовато-желтые бока испещрены 5-9 темными поперечными полосами, хвостовой, анальный, брюшные плавники ярко-красного цвета, грудные плавники желтые. Первый спинной плавник сизый с большим черным пятном в задней его части, второй — зеленовато-желтый.",
      price: "350 сом",
      slug: "Маленький",
      category: "Рыба"
    },
    {
      id: 4,
      fish_images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UphxluLWAhoqJ_be-_WthJCXAepeD2zDZg&s",
      name: "Лосось",
      description: "Лосось — рыба семейства лососевых. Нежно-розовое мясо рыбы называется лососина. Лосось считается жирной рыбой. ",
      price: "1670 сом",
      slug: "Маленький",
      category: "Рыба"
    },
    {
      id: 5,
      fish_images: "https://www.rybalkagroup.ru/wp-content/uploads/2023/06/5.jpg",
      name: "Карась",
      description: "Караси — неприхотливые промысловые рыбы, и ценный объект прудового хозяйства благодаря способности выживать при низком (до 2—3 мг/л) содержании кислорода в воде. Спинной плавник длинный, глоточные зубы однорядные. Тело высокое с толстой спиной, умеренно сжатое с боков. Чешуя крупная и гладкая на ощупь.",
      price: "170 сом",
      slug: "Маленький",
      category: "Рыба"
    },
  ]

  const food = [
    {
      id: 1,
      fish_images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGSVXhpkXQyABE7YkuWJUZ3qDikfvBmriww&s",
      name: "Треска с соусом голландез",
      description: "Фото этого блюда мы выбрали для обложки статьи. Могли ли вы подумать, что банальная треска может быть настолько красиво, изысканно подана?.. Голландез — соус французский, готовят его на основе яиц и сливочного масла. К постной треске он подходит как нельзя лучше.",
      price: "1300 сом",
      slug: "Горячая",
      category: "Еда"
    },
    {
      id: 2,
      fish_images: "https://vkusvill.ru/upload/resize/666385/666385_1200x99999x90.webp",
      name: "Палтус, запечённый с овощами",
      description: "Если вы хотите приготовить не только вкусное, но и низкокалорийное блюдо из рыбы, рекомендуем вам запечь палтуса с овощами.",
      price: "2000 сом",
      slug: "Запеченная",
      category: "Еда"
    },
    {
      id: 3,
      fish_images: "https://vkusvill.ru/upload/resize/666386/666386_1200x99999x90.webp",
      name: "Тунец в кунжутной корочке с гуакамоле",
      description: "Простое и вкусное блюдо, которое очень быстро готовится и при этом эффектно и ярко выглядит на тарелке. А сочетание тунца с гуакамоле достаточно классическое.",
      price: "1600 сом",
      slug: "Салат",
      category: "Еда"
    },
    {
      id: 4,
      fish_images: "",
      name: "Ледяная рыба, запечённая под сухарной крошкой",
      description: "Бобы эдамаме — отличный гарнир к рыбе. Если ещё не пробовали, самое время это сделать.",
      price: "800 сом",
      slug: "Жаренна",
      category: "Еда"
    },
    {
      id: 5,
      fish_images: "https://vkusvill.ru/upload/resize/666388/666388_1200x99999x90.webp",
      name: "Треска по-арабски",
      description: "Рыба с томатом, как выяснилось, довольно традиционное сочетание. И любят его не только в нашей кухне.",
      price: "700 сом",
      slug: "Варенная",
      category: "Еда"
    },
  ]





  const get = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/fish/")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
