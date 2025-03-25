import * as Yup from 'yup';

const PizzaOrderFormSchema = Yup.object().shape({
    selectedSize: Yup.string().required("Boyut seçmek zorunludur"),
    selectedCrust: Yup.string().required("Hamur seçmek zorunludur"),
    customer: Yup.string()
        .required("Müşteri adı zorunludur.")
        .min(3, "Müşteri adı en az 3 karakter olmalıdır."),
    selectedIngredients: Yup.array()
        .min(4, "En az dört malzeme seçmelisiniz.")
        .max(10, "En fazla 10 malzeme seçebilirsiniz.")
        .required("Ekstra malzemeler seçmek zorunludur."),
    orderNote: Yup.string()
        .max(200, "Sipariş notu 200 karakterden fazla olamaz."),
});

export default PizzaOrderFormSchema;
