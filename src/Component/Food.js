import React from 'react';

function FoodMenu() {
  const foodItems = [
    {
      id: 1,
      name: 'ข้าวผัด',
      description: 'ข้าวผัดสูตรพิเศษพร้อมเครื่องเคียง',
      price: '50 บาท',
      image: '/assets/images/food1.jpg',
    },
    {
      id: 2,
      name: 'ก๋วยเตี๋ยว',
      description: 'เส้นเหนียวนุ่มกับน้ำซุปหอมกรุ่น',
      price: '45 บาท',
      image: '/assets/images/food2.jpg',
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center">เมนูอาหาร</h1>
      <div className="row">
        {foodItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-primary">{item.price}</p>
                <a href="#" className="btn btn-primary">สั่งซื้อ</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
