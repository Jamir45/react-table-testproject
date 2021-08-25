import { format } from "date-fns";
import ColumsFilter from "../../component/ColumsFilter";

export const tableColumns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumsFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const groupHeader = [
  {
    Header: "Id",
    Footer: "Id",
    columns: [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        Filter: ColumsFilter,
      },
    ],
  },
  {
    Header: "User Name",
    Footer: "User Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumsFilter,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumsFilter,
      },
    ],
  },
  {
    Header: "User Info",
    Footer: "User Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Filter: ColumsFilter,
      },
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
        Filter: ColumsFilter,
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumsFilter,
      },
    ],
  },
  {
    Header: "Contact",
    Footer: "Contact",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
        Filter: ColumsFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumsFilter,
      },
    ],
  },
];
