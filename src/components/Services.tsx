import Image from "next/image"
import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionIcon from "@/assets/icon-solutions.svg";
import OprtionIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

export function Services() {
    return (
        <ul className="flex flex-col items-start gap-9">
                            <li className="flex items-center gap-9 pb-9 
                            border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center
                                justify-center">
                                    <Image 
                                    src={PhoneIcon} 
                                    alt=" Phone Icon " 
                                    />
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">
                                Acompanha sua conta, fazer transferências
                                e pagamentos de onde estiver
                                </p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 
                            border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center
                                justify-center">
                                    <Image 
                                    src={SoluctionIcon} 
                                    alt=" Phone Icon " 
                                    />
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">
                                Soluções de empréstimos e renegociações para 
                                organizar suas finanças
                                </p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 
                            border-b-[1px] border-opacity-gray">
                                <div className="w-7 h-7 flex items-center
                                justify-center">
                                    <Image 
                                    src={OprtionIcon} 
                                    alt=" Phone Icon " 
                                    />
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">
                                Diversas opções de investimentos, de acordo com
                                o seu perfil de investidor
                                </p>
                            </li>
                            <li className="flex items-center gap-9 pb-9 
                           border-opacity-gray">
                                <div className="w-7 h-7 flex items-center
                                justify-center">
                                    <Image 
                                    src={CardIcon} 
                                    alt=" Phone Icon " 
                                    />
                                </div>
                                <p className="flex-1 text-txt-gray pr-2">
                                Acompanhe a fatura do seu cartão e faça compras
                                online com seu cartão virtual
                                </p>
                            </li>
                        </ul>
    )
}