
import { 
    ProgressBarContainer, 
    ProgressBarStatus 
} from "./style"



export default function ProgressBar ({ step }) {
    return(
        <ProgressBarContainer>
            <ProgressBarStatus step={step} />
        </ProgressBarContainer>
    )
}
