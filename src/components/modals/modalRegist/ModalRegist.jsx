import React, { useState } from "react";

import {
  FormWrapper,
  Title,
  Subtitle,
  Input,
  Select
} from "../modalsStyles/Modals.styles";
import { Button } from "../../../style/StyleComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalRegist
() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value.length > 13) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = true;
      toast.error("Ism kiritilmadi ❌");
    }

    if (!/^\+998\d{9}$/.test(formData.phone)) {
      newErrors.phone = true;
      toast.error("Telefon noto‘g‘ri ❌ (+998XXXXXXXXX)");
    }

    if (!formData.course) {
      newErrors.course = true;
      toast.error("Kurs tanlanmadi ❌");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const token = process.env.REACT_APP_BOT_TOKEN;
      const chatId = process.env.REACT_APP_CHAT_ID;

      console.log('====================================');
      console.log(token);
      console.log(chatId);
      console.log('====================================');

      const message = `
📥 Yangi Registratsiya
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
📚 Kurs: ${formData.course}
`;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        toast.success("Yuborildi! Telegramga ketdi ✅");

        setFormData({
          name: "",
          phone: "+998",
          course: "",
        });

        setErrors({});
      } else {
        toast.error("Yuborilmadi ❌ Telegram xatolik");
      }

    } catch (error) {
      console.log(error);
      toast.error("Internet yoki server xatolik ❌");
    } finally {
      setLoading(false);
    }
  };

  // ? select

  const courseOptions = [
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "robotexnika", label: "Robotexnika" },
  { value: "foundation", label: "Foundation" },
  { value: "grafik", label: "Grafik dizayn" },
  { value: "smm", label: "SMM" },
  { value: "kompyuter", label: "Kompyuter savodxonligi" },
];

  const handleCourseChange = (selectedOption) => {
  setFormData((prev) => ({
    ...prev,
    course: selectedOption ? selectedOption.value : "",
  }));
};



  return (
    <FormWrapper>
      <Title>Bepul Registratsiya</Title>

      <Subtitle>
        Aloqa ma'lumotlaringizni qoldiring, siz bilan bog‘lanamiz.
      </Subtitle>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          type="text"
          name="phone"
          placeholder="+998901234567"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Select
  options={courseOptions}
  onChange={handleCourseChange}
  placeholder="Kurs tanlang"
  isSearchable={false}
  styles={{
    control: (base, state) => ({
      ...base,
      padding: "6px",
      borderRadius: "6px",
      border: state.isFocused ? "1px solid #4a90e2" : "1px solid #ccc",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #4a90e2",
      },
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#4a90e2" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "6px",
      overflow: "hidden",
    }),
  }}
/>


        <Button type="submit" disabled={loading}>
          {loading ? "Yuborilmoqda..." : "Yuborish"}

        </Button>
      </form>

       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        // theme="colored"
      />
    </FormWrapper>
  );
}

export default ModalRegist
;