import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {

    render(<CheckoutForm />);


    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target: { value: 'Chase' } });
    fireEvent.change(lastNameInput, { target: { value: 'Miller' } });
    fireEvent.change(addressInput, { target: { value: '74539 Top Sound' } });
    fireEvent.change(cityInput, { target: { value: 'Memphis' } });
    fireEvent.change(stateInput, { target: { value: 'TN' } });
    fireEvent.change(zipInput, { target: { value: '36748' } });


    const checkoutButton = screen.getByRole('button', /checkout/i);

    fireEvent.click(checkoutButton);


    const successMessage = screen.getByTestId('successMessage');

    expect(successMessage).toBeInTheDocument();

    const shippingFirstName = screen.getAllByText(/chase /i);
    const shippingLastName = screen.getAllByText(/miller/i);
    const shippingAddress = screen.getAllByText(/74539 top sound/i);
    const shippingCity = screen.getAllByText(/memphis/i);
    const shippingState = screen.getAllByText(/tn/i);
    const shippingZip = screen.getAllByText(/36748/i);
});











