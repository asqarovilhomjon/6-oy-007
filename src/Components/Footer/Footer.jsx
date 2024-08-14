import React from 'react'
import ins from '../../assets/ins.png'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-slate-100 py-[40px] mt-36 px-9'>
                <div className="container mx-auto">
                    <div>
                        <div className='px-8'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex justify-center gap-40 items-end mt-7'>
                            <div className='flex w-1/5'>
                                <ul className='flex flex-col gap-6'>
                                    <li className='font-bold  hover:text-orange-500'>Информация</li>
                                    <li className=" hover:text-orange-500">Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.</li>
                                    <li className=" hover:text-orange-500">УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299 </li>
                                    <li className=" hover:text-orange-500">Политика конфиденциальности</li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul className='flex flex-col gap-5'>
                                    <li className='font-bold  hover:text-orange-500'>Меню</li>
                                    <li className=" hover:text-orange-500">Главная | Каталог | Товары в наличии</li>
                                    <li className=" hover:text-orange-500">Скидки | Популярное | Вдохновение</li>
                                    <li className=" hover:text-orange-500">Доставка | Услуги | Условия</li>
                                    <li className=" hover:text-orange-500">Контакты | Вставить | Cписок покупок</li>
                                    <li className=" hover:text-orange-500">Корзина | Личный кабинет | Избранное</li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul className='flex flex-col gap-5'>
                                    <li className='font-bold  hover:text-orange-500'>Контакты</li>
                                    <li className=' hover:text-orange-500'>г.Минск</li>
                                    <li className=' hover:text-orange-500'>Ул. Первомайская, Д. 1, Кв. 43</li>
                                    <li className=' hover:text-orange-500'>+ 375 434 847 28 84</li>
                                    <li className=' hover:text-orange-500'>+ 375 448 473 09 48</li>
                                    <li className=' hover:text-orange-500'>ikeaekspress@gmail.com</li>
                                </ul>
                            </div>
                            <div className=''>
                                <img src={ins} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer