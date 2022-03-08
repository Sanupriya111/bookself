var express = require('express')
var app = express();
app.use(express.json())//middleware
//app.use(express.urlencoded({extended:true}));//middleware
app.use(express.static('./public'));//static file
app.set('view engine', 'ejs');
app.set('views', __dirname + "/src/views")//files directory
const details = [
    {
        img: "/img/b1.jpg",
        title: "The Love songs",
        rate: "$65",
        discription: "item,simple,smart",
        star: "4",
        productid: 0,
        catagory: "Love",
        dis: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."

        },
    {
        img: "/img/b2.jpg",
        title: "Python Tricks",
        rate: "$75",
        discription: "item,simple,smart",
        star: "4",
        productid: 1,
        catagory: "programing",
        dis:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut placeat expedita saepe doloremque, delectus itaque accusantium ullam fuga impedit hic quae vero ipsum? Esse ex pariatur facere facilis possimus!t amet consectetur adipisicing elit. Itaque saepe architecto aliquam atque harum ab et sequi omnis doloremque quas, laboriosam officiis expedita vitae. Reiciendis sequi beatae natus impedit culpa.</p>"
    },


    {
        img: "/img/b3.jpg",
        title: "George 1984",
        rate: "$55",
        discription: "item,simple,smart",
        star: "3",
        productid: 2,
        catagory: "History",
        dis:"gdhfsjdogklfdgdzdja hdgjzkfjlz;gjdfg ufdhijfsdkz"

    },
    {
        img: "/img/b4.jpg",
        title: " Where the Drowned girls ",
        rate: "$25",
        discription: "item,simple,smart", star: "5",
        productid: 3,
        catagory: "New gen",
        dis:"fjfmkf;las fjskfsdfla fnskdfk"
    },

]

app.get('/', (req, res) => {
    res.render("index",
        {
            Books: "The love Songs",
            Courses: "abcdef",
            nav: [{ link: "/", name: "Home" },
            { link: "/second", name: "Pages" }]
        })
})


app.get('/thired/:i', (req, res) => {
    const i=req.params.i
    console.log(i)
//      if(details[i].productid==i)
//    {
    
  var book= details.filter((ele)=>ele.productid===parseInt(i))


  // })
// }
// else
// {
//     book=[];
// }
   
     res.render("thired",{book:book})
        console.log(book)
        
})
    



app.get('/second', (req, res) => {
    res.render("second", { details })
})


app.listen(3400, () => {
    console.log("server is listening to port :3400");
})