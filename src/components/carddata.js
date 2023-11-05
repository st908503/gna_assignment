const data = [
    {
        image: 'https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg',
        time: '9+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Ramada by Wyndham Brasilia Alvorada Hotel in South Wing, Brasilia',
        venue: 'South Wing, Brasilia',
        ratings: '⭐⭐⭐',
        reviews: '3044',
        price: 'US$72'

    },
    {
        image: 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
        time: '11+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Pousada Kaliman Luxo Hotel in Capivari, Campos do Jordão',
        venue: 'Capivari, Campos do Jordão',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '544',
        price: 'US$242'

    },
    {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1',
        time: '13+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Lagune Barra Hotel Hotel in Barra da Tijuca, Rio de Janeiro',
        venue: 'Barra da Tijuca, Rio de Janeiro',
        ratings: '⭐⭐⭐⭐',
        reviews: '1234',
        price: 'US$62'

    },
    {
        image: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
        time: '16+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Hotel Cumbres Puerto Varas Hotel in Puerto Varas',
        venue: 'Puerto Varas, Chile',
        ratings: '⭐⭐⭐',
        reviews: '456',
        price: 'US$55'

    },
    {
        image: 'https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg',
        time: '34+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Tierra Viva Miraflores Centro Hotel in Miraflores, Lima',
        venue: 'Miraflores, Lima',
        ratings: '⭐⭐',
        reviews: '453',
        price: 'US$32'

    },
    {
        image: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais',
        time: '9+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Nao Victoria Hostel Hotel in Cusco City Centre, Cusco',
        venue: 'Cusco City Centre, Cusco',
        ratings: '⭐⭐⭐⭐',
        reviews: '2343',
        price: 'US$72'

    },
    {
        image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww',
        time: '13+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Atoq Paracas Reserva Hotel in Paracas',
        venue: 'Paracas, Peru',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '5632',
        price: 'US$342'

    },
    {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww',
        time: '15+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Guyana Marriott Hotel Georgetown Hotel in Georgetown',
        venue: 'Mumbai ,India',
        ratings: '⭐⭐⭐',
        reviews: '143',
        price: 'US$62'

    },
    {
        image: 'https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg',
        time: '15+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Status International Hotel in Georgetown',
        venue: 'Georgetown, London',
        ratings: '⭐⭐⭐⭐',
        reviews: '543',
        price: 'US$75'

    },
    {
        image: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
        time: '19+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Ramada by Wyndham Princess Georgetown Hotel in Bangladesh',
        venue: 'Dhaka, Bangladesh',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '6345',
        price: 'US$322'

    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHR-LitTOrNAzTLGI-rRj2_HX4HJ1locv1uw&usqp=CAU',
        time: '16+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'HAB Hotel Bogotá Hotel in Chapinero, Bogotá',
        venue: 'Chapinero Bogotá, Colombia',
        ratings: '⭐⭐⭐⭐',
        reviews: '234',
        price: 'US$72'

    },
    {
        image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?b=1&s=612x612&w=0&k=20&c=Qzz98XOQjRZ0lgO0nhvrwBE3DhA-C8Fzyh7fijBQAsY=',
        time: '36+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock London with Guided Cathedral Tour',
        venue: 'Westminster Borough, London',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '6532',
        price: 'US$232'

    },
    {
        image: 'https://hycinthhotels.com/wp-content/uploads/elementor/thumbs/3-4-q434jpyujgpidqk6n3vf25g5zkbkggwkkx44xsh1so.jpg',
        time: '16+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Chairu Eco Hotel Hotel in Santa Cruz de la Sierra',
        venue: 'Santa Cruz de la Sierra, Bolivia',
        ratings: '⭐⭐⭐',
        reviews: '2345',
        price: 'US$52'

    },
    {
        image: 'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
        time: '15+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Alejandro 1º Hotel Hotel in Salta',
        venue: 'Salta, Argentina',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '4356',
        price: 'US$342'

    },
    {
        image: 'https://media.licdn.com/dms/image/D4D12AQHv91WGkGrwew/article-cover_image-shrink_720_1280/0/1680587500469?e=2147483647&v=beta&t=zxpVEh3FhM-S8DoQa22T-silfvOJzXbbshwv-sO0D8k',
        time: '26+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'AQ Tailored Suites Hotel in Buenos Aires City Centre, Buenos Aires',
        venue: 'Buenos Aires, Argentina',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '2464',
        price: 'US$222'

    },
    {
        image: 'https://assets.cntraveller.in/photos/63b80c6d79d81704e445df00/master/pass/Westin%20Himalayas%20facade.jpg',
        time: '23+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Roberta Rosa De Fontana Suites Hotel in Rosario',
        venue: 'Rosario, Argentina',
        ratings: '⭐⭐',
        reviews: '345',
        price: 'US$52'

    },
    {
        image: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65046bf150d1abb7e5911702_x-65046bcfdc4f0.webp',
        time: '13+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'La Capilla - Punta del Este Hotel in San Rafael, Punta del Este',
        venue: 'Punta del Este, Uruguay',
        ratings: '⭐⭐⭐⭐⭐',
        reviews: '2453',
        price: 'US$192'

    },
    {
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/472036509.jpg?k=ca519c1b538fb5a354795ca88348ad866bccca2859a8abec4e8560d167b0b235&o=&hp=1',
        time: '12+ hours',
        tour_duration: 'Full Day Tours',
        tour_description: 'Costa Colonia - Riverside Boutique Hotel in Colonia del Sacramento',
        venue: 'Colonia del Sacramento, Uruguay',
        ratings: '⭐⭐⭐⭐',
        reviews: '2345',
        price: 'US$122'

    }

]


export default data;