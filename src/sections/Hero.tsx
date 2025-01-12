import { Element , Link as LinkScroll} from "react-scroll"
import Button from "../components/Button"
import { hero, zap } from "../assets"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:mb-36 max-md:pt-36 max-md:pb-32">
        <Element name="hero">
            <div className="container">
                <div className="relative z-2 max-w-512 max-lg:max-w-388">
                    <div className="caption small-2 uppercase text-p3">
                        Video Editing
                    </div>
                    <h1 className="h1 mb-6 uppercase max-lg:mb-7 max-lg:h2  max-md:mb-4 max-md:text-5xl max-md:leading-12">Amazingly simple</h1>
                    <p className="max-w-440 mb-14 body-1 max-md:mb-10">We designed XORA AI Video Editor to be an easy to use, quick to learon, and surprisingly powerfull</p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                        <Button icon={zap}>
                            Try it now
                        </Button>
                    </LinkScroll>
                </div>
                <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
                    <img src={hero} alt="Hero" className="size-1230 max-lg:h-auto"/>
                </div>
            </div>
        </Element>
        
    </section>
  )
}

export default Hero