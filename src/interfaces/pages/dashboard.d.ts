import { DefaultOptionType } from 'antd/lib/select';
import { FormikProps } from 'formik';

declare namespace Dashboard {
  export interface DataVideo {
    index: number;
    title: string;
    video1: string;
    video2: string;
  }

  export interface InitialValues {
    search: string;
    type: string;
    sort: string;
  }

  export interface UseInit {
    indexOfFirstItem: number;
    totalItems: number;
    currentPage: number;
    currentItems: DataVideo[];
    formik: FormikProps<any>;
    optionsSelectType: DefaultOptionType[];
    optionsSelectSort: DefaultOptionType[];
    handlePageChange: (newPage: number) => void;
  }
}
