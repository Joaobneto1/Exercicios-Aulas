import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DetailTransactionProps, ITransaction } from "@/interfaces/TransactionsInterfaces"
import { convertToDate } from "@/utils/convertToDate"
import { convertToReal } from "@/utils/convertToReal"
import { createRequest } from "@/utils/createRequest"


async function getTransaction(id: string) {
  const response = await createRequest(`/transactions/${id}`, {
    method: 'GET'
  })
  return response
}

export default async function Detail({ params }: Readonly<DetailTransactionProps>) {
  const { id, description, price, dueDate, status }: ITransaction = await getTransaction(params.id)

  return (

    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Transação</CardTitle>
          <CardDescription>Transação #{id} - {description}.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Descrição</div>
            <div>{description}</div>
            <div className="font-medium">Valor</div>
            <div>{convertToReal(price)}</div>
            <div className="font-medium">Data de Vencimento</div>
            <div>{convertToDate(dueDate)}</div>
            <div className="font-medium">Status</div>
            <div>{status}</div>
          </div>
        </CardContent>
      </Card>
    </div>

  )
}

