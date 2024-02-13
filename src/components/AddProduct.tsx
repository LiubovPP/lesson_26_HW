import { log } from "console";
import { title } from "process";
import { useState } from "react";

export default function AddProduct (){

    type Product = {
        title:string,
        price:number,
        count: number
    }

    const [formData, setFormData] = useState<Product>({title: "", price: 0, count: 0});

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>): void => {
        formData["title"] = event.target.value;
        setFormData({...formData});
        console.log(formData);
        
    }

    const submitHandler = (event:React.FormEvent):void =>{
        event.preventDefault();
    }

    return (
        <div>
            <p>Форма для добавления продукта:</p>
            <form>
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="price" placeholder="price"/>
                <input type="text" name="count" placeholder="count"/>
                <button>Добавить</button>
            </form>
        </div>
    )
}