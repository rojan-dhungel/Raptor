const Tdata = [
    {
        "product_id": "TR12345",
        "category": "Trousers",
        "brand": "Fashionista",
        "color": "Black",
        "size": "Medium",
        "material": "Cotton",
        "price": 39.99,
        "discounted_price": 29.99,
        "availability": true,
        "sale_end_date": "2023-10-15",
        "description": "Classic black cotton trousers with a comfortable fit. Suitable for both formal and casual occasions.",
        "images":'https://media2.newlookassets.com/i/newlook/854122501M2/womens/clothing/trousers/black-cotton-elasticated-parachute-trousers.jpg?strip=true&qlt=50&w=720'

      },
      {
        "product_id": "TR12545",
        "category": "Trousers",
        "brand": "Fashionista",
        "color": "Blue",
        "size": "Medium",
        "material": "Cotton",
        "price": 39.99,
        "discounted_price": 29.99,
        "availability": true,
        "sale_end_date": "2023-10-15",
        "description": "Classic black cotton trousers with a comfortable fit. Suitable for both formal and casual occasions.",
        "images":'https://assets.ajio.com/medias/sys_master/root/20201225/c1pq/5fe6102eaeb2694fd300096a/-473Wx593H-460796322-navy-MODEL.jpg'
     
      },
      {
        "product_id": "TR24680",
        "category": "Trousers",
        "brand": "Casual Comfort",
        "color": "Khaki",
        "size": "Small",
        "material": "Stretch Cotton",
        "price": 29.99,
        "discounted_price": 24.99,
        "availability": true,
        "sale_end_date": "2023-10-18",
        "description": "Comfortable khaki stretch cotton trousers. Ideal for a relaxed, casual look.",
        "images":'https://lestrangelondon.com/cdn/shop/files/LOOK19The24TrousernnKhakinStretchCotton1.jpg?v=1689237581&width=2000'
      },
      {
        "product_id": "TR54321",
        "category": "Trousers",
        "brand": "ElegantWear",
        "color": "Gray",
        "size": "X-Large",
        "material": "Wool Blend",
        "price": 69.99,
        "discounted_price": 59.99,
        "availability": true,
        "sale_end_date": "2023-10-25",
        "description": "Elegant gray wool-blend trousers, perfect for formal occasions. Classic and stylish.",
        "images":"https://www.na-kd.com/globalassets/stl_39125.jpg?ref=95F18C665C"
        
      },
      {
        "product_id": "TR97531",
        "category": "Trousers",
        "brand": "ActiveStyle",
        "color": "Olive Green",
        "size": "Medium",
        "material": "Cotton Blend",
        "price": 34.99,
        "discounted_price": 29.99,
        "availability": true,
        "sale_end_date": "2023-10-22",
        "description": "Stylish olive green cotton-blend trousers with a comfortable fit, perfect for active lifestyles.",
        "images":"https://rukminim2.flixcart.com/image/850/1000/xif0q/trouser/e/f/b/36-chino-olivegrn-urbano-fashion-original-imagjzqfbqjkhwkc.jpeg?q=90"
       
      },
      {
        "product_id": "TR13579",
        "category": "Trousers",
        "brand": "CasualChic",
        "color": "Navy Blue Stripe",
        "size": "Large",
        "material": "Linen",
        "price": 45.99,
        "discounted_price": 39.99,
        "availability": true,
        "sale_end_date": "2023-10-20",
        "description": "Casual chic navy blue striped linen trousers, perfect for a relaxed yet stylish look.",
        "images": "https://www.toa.st/cdn/shop/files/LTRTW15_2_300x.jpg?v=1687099669"
       
      },
      {
        "product_id": "PA001",
        "category": "Pants",
        "brand": "Casual Comfort",
        "color": "Navy Blue",
        "size": "Medium",
        "material": "Cotton Blend",
        "price": 39.99,
        "discounted_price": 29.99,
        "availability": true,
        "sale_end_date": "2023-10-15",
        "description": "Comfortable navy blue cotton-blend pants for a casual look.",
        "images": 'data:image/jpeg;base64,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'
      },

      {
        "product_id": "PA002",
        "category": "Pants",
        "brand": "Formal Elegance",
        "color": "Blue",
        "size": "Large",
        "material": "Printed Baggy Cotton",
        "price": 59.99,
        "discounted_price": 49.99,
        "availability": true,
        "sale_end_date": "2023-10-20",
        "description": "Elegant charcoal gray wool pants suitable for formal occasions.",
        "images":'https://i.pinimg.com/564x/15/b0/e6/15b0e61503ba156eddecd39982830c4a.jpg'
      },
      {
        "product_id": "PA003",
        "category": "Pants",
        "brand": "Active Lifestyle",
        "color": "Olive Green",
        "size": "Small",
        "material": "Stretch Nylon",
        "price": 44.99,
        "discounted_price": 34.99,
        "availability": true,
        "sale_end_date": "2023-10-18",
        "description": "Versatile olive green stretch nylon pants, perfect for an active lifestyle.",
        "images": 'https://www.miersports.com/cdn/shop/products/men-s-jogger-sweatpants-slim-fit-nylon-stretch-athletic-track-pants-olive-green-s-mier-31307126210694.jpg?v=1681094425'
      },

      {
        "product_id": "PA004",
        "category": "Pants",
        "brand": "Fashionista",
        "color": "Black",
        "size": "Medium",
        "material": "Leather",
        "price": 69.99,
        "discounted_price": 59.99,
        "availability": true,
        "sale_end_date": "2023-10-25",
        "description": "Stylish black leather pants for a trendy look.",
        "images": 'https://boathousestores.com/cdn/shop/files/har-60p-44f2-d5v-blk-2.jpg?v=1682363172&width=1000'
      },

      {
        "product_id": "PA005",
        "category": "Pants",
        "brand": "Sporty Vibes",
        "color": "Light Blue",
        "size": "Large",
        "material": "Baggy Cotton",
        "price": 49.99,
        "discounted_price": 39.99,
        "availability": true,
        "sale_end_date": "2023-10-22",
        "description": "Sporty navy blue striped polyester pants for a dynamic look.",
        "images": 'https://i.pinimg.com/564x/e2/f2/9e/e2f29e5357218178330f13764833c246.jpg'
      },

      {
        "product_id": "PA006",
        "category": "Pants",
        "brand": "Casual Chic",
        "color": "Khaki",
        "size": "Medium",
        "material": "Cotton",
        "price": 34.99,
        "discounted_price": 29.99,
        "availability": true,
        "sale_end_date": "2023-10-20",
        "description": "Casual khaki cotton pants with a comfortable fit.",
        "images":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ekgD8KTP6VHJC_q5Yu5wxhXoiwo9i-iu6g&usqp=CAU'
        
      }
        
]

export default Tdata
