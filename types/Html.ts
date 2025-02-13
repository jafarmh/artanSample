export type HeaderLinkProps = {
    title: string;
    active: boolean;
}

export type ModalProps= {
    Open: boolean,
    children: React.ReactNode,
    ChangeOpen: Function,
    showClose?: boolean,
    title: string,
    classCss?:string
  }

  export type FormComponentProps= {
    control?: any
    errors?: any,
    setValue?: any,
    getValues?: any,
    name?:string,
    changeF?:Function,
    emptyFile?:boolean,
    watch?:any
  }

  export type DashboardInfoCard = {
    title: string,
    value: string,
    percent:string
  }