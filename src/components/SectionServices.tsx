import Image from "next/image";

import { Container } from "./Container";
import { Services } from "./Services";


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
                        <p className="text-lg max-w-[554px] mb-16 
                        text-second-gray">
                            Veja como você pode cuidar das suas finanças pelo 
                            app Itaú de forma segura, rápida e o melhor, 
                            no conforto da sua casa.
                        </p>
                        <Services />
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