import React, { forwardRef, useImperativeHandle } from 'react';
import { Form as AntdForm, FormInstance as AntFormInstance, FormProps as antFormProps } from 'antd';
import './index.css'
// interface CFormProps extends FormProps {
//   children: React.ReactNode;
// }

// const CForm = forwardRef<FormInstance, CFormProps>(({ children, ...props }, ref) => {
//   const [form] = Form.useForm();
//   useImperativeHandle(ref, () => ({ getForm: () => form }));
//   return (
//     <Form form={form} name='CForm' scrollToFirstError={true} {...props}>
//       {children}
//     </Form>
//   );
// });

// interface FormItemProps extends Form.ItemProps {
//   children: React.ReactElement;
// }

// const FormItem = ({ children, ...props }: FormItemProps) => (
//   <Form.Item {...props}>{React.cloneElement(children, { ...props })}</Form.Item>
// );

// export default {CForm, FormItem};
