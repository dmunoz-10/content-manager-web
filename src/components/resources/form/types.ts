import { ResourceDataForm, ResourceData } from "@/types"

export type FormProps = {
  type: 'new' | 'edit'
  initalData?: ResourceDataForm | ResourceData
  onSubmit: (form: ResourceDataForm | ResourceData) => void
}
