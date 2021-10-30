import styles from "../styles/card.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function Console({username, lan, code}) {
    function onChange(newValue) {
        console.log("change", newValue);
    }


    return (
        <div className={styles.ok} key={username}>
            {/* <CopyBlock
        language={lan}
        text={code}
        showLineNumbers={false}
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      /> */}

            <SyntaxHighlighter
                className={styles.ok}
                language={lan}
                wrapLines={true}
                style={atomOneDark}
            >
                {code}
            </SyntaxHighlighter>

        </div>
    );
}
