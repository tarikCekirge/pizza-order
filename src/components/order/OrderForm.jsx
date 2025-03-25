import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Radio from '../../UI/Radio';
import SelectBox from '../../UI/SelectBox';
import CheckBox from '../../UI/CheckBox';
import TextAreaInput from '../../UI/TextAreaInput';
import Seperator from '../../UI/Seperator';
import Counter from '../../UI/Counter';
import pizzaOptions from '../../data/pizzaData';
import { useNavigate } from 'react-router-dom';
import PizzaOrderFormSchema from '../../schemas/OrderFormSchema';

const OrderForm = ({ pizzaDetail }) => {
    const navigate = useNavigate();

    const [pizzaCount, setPizzaCount] = useState(1);
    const [pizzaName, setPizzaName] = useState(pizzaDetail.name)

    const { crustOptions, ingredients, sizes } = pizzaOptions.pizzas;

    const validationSchema = PizzaOrderFormSchema

    const formik = useFormik({
        initialValues: {
            selectedSize: '',
            selectedCrust: '',
            selectedIngredients: [],
            orderNote: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const formData = {
                ...values,
                pizzaCount,
                pizzaName: pizzaName,
                totalPrice: calculateTotalPrice(values),
            };
            console.log('Form Submitted: ', formData);
            navigate('/success', { state: { order: formData } });
        },
    });

    const calculateIngredientsTotal = (values) => {
        const ingredientsTotal = values.selectedIngredients.reduce((total, ingredient) => {
            const ingredientPrice = ingredients.find((item) => item.value === ingredient)?.price || 0;
            return total + ingredientPrice;
        }, 0);

        return ingredientsTotal;
    };


    const calculateTotalPrice = (values) => {
        const sizePrice = sizes.find((size) => size.value === values.selectedSize)?.price || 0;
        const crustPrice = crustOptions.find((crust) => crust.value === values.selectedCrust)?.price || 0;
        const ingredientsTotal = values.selectedIngredients.reduce((total, ingredient) => {
            const ingredientPrice = ingredients.find((item) => item.value === ingredient)?.price || 0;
            return total + ingredientPrice;
        }, 0);
        return (sizePrice + crustPrice + ingredientsTotal) * pizzaCount;
    };

    return (
        <div className="container mx-auto max-w-xl py-12">
            <form onSubmit={formik.handleSubmit}>
                {/* Boyut Seçimi */}
                <div className="grid grid-cols-2 gap-4 py-6">
                    <div>
                        <h2 className="text-xl font-barlow font-semibold mb-6">
                            Boyut Seç <span className="text-red-600 font-bold">*</span>
                        </h2>
                        <div className="grid gap-4">
                            {sizes.map((size, index) => (
                                <Radio
                                    key={index}
                                    label={size.label}
                                    value={size.value}
                                    checked={formik.values.selectedSize === size.value}
                                    onChange={formik.handleChange}
                                    name="selectedSize"
                                />
                            ))}
                        </div>
                        {formik.errors.selectedSize && formik.touched.selectedSize && (
                            <p className="text-red-500 text-xs">{formik.errors.selectedSize}</p>
                        )}
                    </div>

                    <div>
                        <h2 className="text-xl font-barlow font-semibold mb-6">
                            Hamur Seç <span className="text-red-600 font-bold">*</span>
                        </h2>
                        <SelectBox
                            name="selectedCrust"
                            options={crustOptions}
                            value={formik.values.selectedCrust}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.selectedCrust && formik.touched.selectedCrust && (
                            <p className="text-red-500 text-xs">{formik.errors.selectedCrust}</p>
                        )}
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-xl font-barlow font-semibold mb-6">Ek Malzemeler</h2>
                    <p className="text-gray-600 leading-relaxed text-base mb-2">
                        En fazla 10 malzeme seçebilirsiniz. Ekstra her malzeme 5₺
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                        {ingredients.map((ingredient, index) => (
                            <CheckBox
                                key={index}
                                label={ingredient.label}
                                value={ingredient.value}
                                checked={formik.values.selectedIngredients.includes(ingredient.value)}
                                onChange={(isChecked) => {
                                    const updatedIngredients = isChecked
                                        ? [...formik.values.selectedIngredients, ingredient.value]
                                        : formik.values.selectedIngredients.filter((item) => item !== ingredient.value);
                                    formik.setFieldValue("selectedIngredients", updatedIngredients);
                                }}
                                onBlur={formik.handleBlur}
                                name="selectedIngredients"
                            />


                        ))}
                    </div>
                    {formik.errors.selectedIngredients && formik.touched.selectedIngredients && (
                        <p className="text-red-500 text-xs">{formik.errors.selectedIngredients}</p>
                    )}
                </div>

                {/* Sipariş Notu */}
                <div>
                    <h2 className="text-xl font-barlow font-semibold mb-6">Sipariş Notu</h2>
                    <TextAreaInput
                        name="orderNote"
                        value={formik.values.orderNote}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.orderNote && formik.touched.orderNote && (
                        <p className="text-red-500 text-xs">{formik.errors.orderNote}</p>
                    )}
                </div>

                <Seperator />
                <div className='orderCountArea'>
                    <Counter count={pizzaCount} setCount={setPizzaCount} />
                    <div className="info">
                        <h6 className='text-xl font-600 pb-2'>Sipariş Toplamı:</h6>
                        <p className='text-gray-500 flex justify-between font-600'><span>Seçimler</span><span>{calculateIngredientsTotal(formik.values)}₺</span></p>
                        <p className='text-red-600 flex justify-between font-600'><span>Toplam</span><span>{calculateTotalPrice(formik.values)}₺</span></p>

                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer px-6 py-2 md:py-3 font-600 text-gray-950 bg-yellow-400 disabled:cursor-auto disabled:text-white rounded disabled:bg-gray-200"
                        disabled={!formik.isValid || !formik.dirty}
                    >
                        Siparişi Ver
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
