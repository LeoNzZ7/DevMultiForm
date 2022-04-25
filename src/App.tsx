import { Router } from './Routes/router';
import { FormProvider } from './contexts/formContext';

const App = () => {
  return (
     <FormProvider>
       <Router/>
     </FormProvider>
  );
}

export default App;
