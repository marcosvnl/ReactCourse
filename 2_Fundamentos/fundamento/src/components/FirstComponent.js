import TemplateExpressions from './TemplateExpressions';
import MyComponent from './MyComponent';

const FirstComponent = () => {
    return(
        <div>
            <strong>First Component</strong>
            <br />
            <TemplateExpressions />
            <MyComponent />
        </div>
    );
};

export default FirstComponent;