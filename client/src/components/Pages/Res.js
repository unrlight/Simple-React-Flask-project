import React from 'react'
import "./Res.css"

export default function Res() {
  return (
    <div>
        <h1 className='h1res'>Полезные ресурсы</h1>

        <div className='SiteCard'>
            <img src={"./img/site1.png"}></img>
            <h2 className='h2res'>Шатура</h2>
            <p>Компания «Шатура» по праву занимает лидирующие позиции на мебельном рынке России более 60 лет. Регулярная модернизация производственного оборудования, многоуровневый тест-драйв каждого изделия и отточенный клиентский сервис делают МК «Шатура» компанией вне времени.</p>
            <a href='https://kazan.shatura.com/collections/gostinye/' target="_blank" className='Aurl'>Ссылка</a>
        </div>

        <div className='SiteCard'>
            <img src={"./img/site2.png"}></img>
            <h2 className='h2res'>Leroy Merlin</h2>
            <p>Леруа Мерлен — это компания‑платформа,
объединяющая клиентов, партнёров и профессионалов в единую
экосистему для улучшения и благоустройства дома.</p>
            <a href='https://kazan.leroymerlin.ru/catalogue/mebel/?utm_referrer=https%3A%2F%2Fwww.google.com%2F' target="_blank" className='Aurl'>Ссылка</a>
        </div>

        <div className='SiteCard'>
            <img src={"./img/site3.png"}></img>
            <h2 className='h2res'>Мебели базар</h2>
            <p>Мебельный базар в Казани занимается продажей мебели более 10 лет. За этот период мы наладили прямые поставки с 84 фабрик-производителей, среди которых такие известные бренды как “Орматек”, “Аскона”, “Трия”, “Мебелони”, Tetchair, BTS. Своим клиентам мы гарантируем: </p>
            <a href='https://gorodskaya-mebel.ru/' target="_blank" className='Aurl'>Ссылка</a>
        </div>
    </div>
  )
}
