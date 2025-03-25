import * as Yup from 'yup';

const PizzaOrderFormSchema = Yup.object().shape({
    selectedSize: Yup.string().required("Boyut seçmek zorunludur"),
    selectedCrust: Yup.string().required("Hamur seçmek zorunludur"),
    selectedIngredients: Yup.array()
        .min(1, "En az bir malzeme seçmelisiniz.")
        .max(10, "En fazla 10 malzeme seçebilirsiniz.")
        .required("Ekstra malzemeler seçmek zorunludur."),
    orderNote: Yup.string()
        .max(200, "Sipariş notu 200 karakterden fazla olamaz."),
});

export default PizzaOrderFormSchema