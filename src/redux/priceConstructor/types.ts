export type SelectOption= {
  value: string;
  label: string;
  isDisabled?: boolean;
}

export type CarMakeFormSelect = {
  carMake: SelectOption | null;
  carModel: SelectOption | null;
  carYear: SelectOption | null;
}

export interface priceConstructorState extends CarMakeFormSelect {
  carpetColor: string;
  carpetTrim: string;
  set: string
}