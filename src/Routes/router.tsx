import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormStep1 } from "../pages/formStep1";
import { FormStep2 } from "../pages/formStep2";
import { FormStep3 } from "../pages/formStep3";
import { FinishRegister } from "../pages/finishRegister";

export const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/"   element={<FormStep1 />} />
                <Route path="/step2" element={<FormStep2 />} />
                <Route path="/step3" element={<FormStep3 />} />
                <Route path="/stepfinish" element={<FinishRegister />} />
           </Routes>
        </BrowserRouter>
    );
}