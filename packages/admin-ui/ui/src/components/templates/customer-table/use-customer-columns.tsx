import moment from "moment"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { getColor } from "../../../utils/color"
import CustomerAvatarItem from "../../molecules/customer-avatar-item"

export const useCustomerColumns = () => {
  const { t } = useTranslation()
  const columns = useMemo(
    () => [
      {
        Header: t("customer-table-date-added", "Date added"),
        accessor: "created_at", // accessor is the "key" in the data
        Cell: ({ cell: { value } }) => moment(value).format("DD MMM YYYY"),
      },
      {
        Header: t("customer-table-name", "Name"),
        accessor: "customer",
        Cell: ({ row }) => (
          <CustomerAvatarItem
            customer={row.original}
            color={getColor(row.index)}
          />
        ),
      },
      {
        Header: t("customer-table-email", "Email"),
        accessor: "email",
      },
      {
        Header: t("customer-table-organisation", "Organisation"),
        accessor: "customer_",
        Cell: ({ row }) => {
          if(row?.original.shipping_addresses?.length > 0) return row?.original.shipping_addresses[0].company
          else if (row?.original.billing_address) return row?.original.billing_address.company
          else return null
        },
      },
      {
        accessor: "orders",
        Header: () => (
          <div className="text-right">
            {t("customer-table-orders", "Orders")}
          </div>
        ),
        Cell: ({ cell: { value } }) => (
          <div className="text-right">{value?.length || 0}</div>
        ),
      },
      {
        Header: "",
        accessor: "col-2",
      },
    ],
    []
  )

  return [columns]
}
