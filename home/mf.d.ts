declare module "create/CreateForm" {
  import * as React from "react";

  type CreateFormProps = {
    onSubmit?: (data: { title: string; content: string }) => void;
  };

  const CreateForm: React.FC<CreateFormProps>;

  export { CreateForm };
}
