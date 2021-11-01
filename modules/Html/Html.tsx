import * as Styled from './styles';

const HTMLComponent = (props: any) => {
    return <Styled.Container dangerouslySetInnerHTML={{ __html: props?.moduleHtml?.html }} />;
};

export default HTMLComponent;
