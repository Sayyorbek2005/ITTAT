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

function ModalKons({ onClose }) {
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

      const message = `
📥 Yangi Konsultatsiya
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

        // 👇 3 soniyadan keyin modal yopiladi
        setTimeout(() => {
          onClose();
        }, 3000);
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

  return (
    <FormWrapper>
      <Title>Bepul konsultatsiya</Title>

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
          name="course"
          value={formData.course}
          onChange={handleChange}
          error={errors.course}
        >
          <option value="">Kurs tanlang</option>
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
          <option value="robotexnika">Robotexnika</option>
          <option value="foundation">Foundation</option>
          <option value="grafik">Grafik dizayn</option>
          <option value="smm">SMM</option>
          <option value="kompyuter">Kompyuter savodxonligi</option>
        </Select>

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
      />
    </FormWrapper>
  );
}

export default ModalKons;