import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import DynamicInput from "./DynamicInput";
import DynamicButton from './DynamicButton';
import '../styles/Modal/Modal.css';
import '../styles/Form/Form.css';

interface DynamicFormProps {
  formConfig: any;
  initialValues: any;
  onSubmit: (values: any, { setSubmitting }: FormikHelpers<string>) => void;
}

const DynamicForm = ({ formConfig, initialValues, onSubmit } : DynamicFormProps) => { 

    return (      
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(formConfig.validationSchema)}
        onSubmit={onSubmit}
      > 

        {({ isSubmitting, errors, touched }) => (
          <Form>
            {formConfig.fields.map((field: any, index: number) => (

              <div key={field.name}>

                {field.type === "input" ? (
                  <DynamicInput 
                    className={`form-input ${errors[field.name] && touched[field.name] ? 'form-input-error' : ''} 
                              ${index === 0 ? 'autofocus' : ''}`
                              } 
                    {...field} 
                    autoFocus={index === 0}
                  />
                ) : null}

                <ErrorMessage className='form-field-error' name={field.name} component="div" />

              </div>
            ))}

            <DynamicButton className="modal-button" type="submit" disabled={isSubmitting}>
              Login
            </DynamicButton>
          </Form>
        )}

      </Formik>
    );
  };

  export default DynamicForm;