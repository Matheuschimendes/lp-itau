import Image from "next/image";

import { Container } from "./Container";
import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionIcon from "@/assets/icon-solutions.svg";
import OprtionIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

import ImagePhone from "@/assets/phone.png"

export function SectionService() {
    return (
        <section className="relative w-full h-[965px] ">
                <Container>
                    <div className="flex-1 max-w-[594px] pt-32">   
                        <span className="text-primary-orange text-sm font-bold 
                        uppercase mb-9"> 
                            Serviços exclusivos
                        </span>
                        <h1 className="text-primary-gray text-[56px] font-bold
                        leading-tight mb-6">
                            Gerencie suas finanças sem sair de casa
                        </h1>
                        <p className="text-lg max-w-[554px] mb-16 text-second-gray">
                            Veja como você pode cuidar das suas finanças pelo 
                            app Itaú de forma segura, rápida e o melhor, 
                            no conforto da sua casa.
                        </p>
                        {/* Depois criar um Componete desse codigo a baixo */}
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
                    </div>
                </Container>
                <div className="absolute flex items-center bg-gray-fone w-[32%]  
                 h-full right-0 top-0">
                    <Image 
                        src={ImagePhone} 
                        alt="Phone" 
                        className="translate-x-[-50%]"
                    />
                </div>
        </section>
    )
}