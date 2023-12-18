import "./Anket.css";
import React, { useState } from "react";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";


export default function Anket() {
  const [values, setValues] = useState({
    firstName: "name",
    lastName: "lname",
    email: "dwad@wd.ac",
    midname: "dawd", /* */
    phonenumber: "awd",
    textinfo: "dwad",
    contactme: "awd",
    dropdown: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));

  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = useState('Столы')
  let colors = ['Столы', 'Шкафы', 'Двери', 'Окна'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.midname && values.phonenumber && values.textinfo) { /**/
      setValid(true);
    }
    setSubmitted(true);

    var jsonData = {
      "user": [
          {
              "firstName": values.firstName, 
              "lastName": values.lastName,
              "email": values.email,
              "midname": values.midname, 
              "phonenumber": values.phonenumber, 
              "textinfo": values.textinfo, 
              "contactme": values.contactme, 
              "dropdown": values.dropdown, 
          },
      ]
    }
    
    fetch('http://127.0.0.1:5000/backenddata', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    })
  };

  return (
    <div className="form-container">
      <h1 className='h1res'>Анкета покупателя</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Спасибо, {values.firstName} {values.lastName} {values.midname}{" "}
            </h3>
            <div> Вы успешно отправили анекету! </div>
            <div> Остальные введённые данные: </div>
            <div> Номер телефона: {values.phonenumber} </div>
            <div> Дополнительная информация: {values.textinfo} </div>
            <div> Почта: {values.email} </div>
            <div> Выбор типа мебели: {value} </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Имя"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error">Введите имя</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Отчество"
            name="midname"
            value={values.midname}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.midname && (
          <span id="mid-name-error">Введите отчество</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Фамилия"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error">Введите фамилию</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Почта"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Введите адрес электронной почты</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Номер телефона"
            name="phonenumber"
            value={values.phonenumber}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.phonenumber && (
          <span id="phone-number-error">Введите номер телефона</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Введите информацию"
            name="textinfo"
            value={values.textinfo}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.textinfo && (
          <span id="text-info-error">Введите информацию</span>
        )}


        {!valid && (
          <div className="cbt">
            <a >
              Выбор мебели:
            </a>
          </div>
        )}

        {!valid && (
        <Combobox
          className="cb"
          data={colors}
          value={values.dropdown}
          onChange={value => setValue(value)}
        />
        )}

      
      {!valid && (
      <div id="iddivchk" className="divchk">
      <input
        class="chkbx"
        id="chkbx"
        type="checkbox"
        defaultChecked={false}
        value={values.contactme}
        onChange={() => setChecked(!checked)}
      />
      <p class="textchkbx">Свяжитесь со мной</p>
      </div>
      )}

      
        
      
        {!valid && (
          <button class="form-field" type="submit">
            Отправить анекету
          </button>
        )}
      </form>
    </div>
  );
}
