import * as Styled from './styles';

const FooterComponent = ({ footerNavigation }: any) => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Container>
            <Styled.BottomContainer>
                <Styled.CopyrightContainer>
                    <Styled.Logo src='/logo.svg' alt='Logo' />
                    <Styled.Copyright>Schüttler Immobilienmanagement {currentYear}</Styled.Copyright>
                </Styled.CopyrightContainer>

                <Styled.Navigation>
                    {footerNavigation?.map((item: any) => {
                        return (
                            <Styled.NavigationItem key={item.slug} href={item.slug}>
                                <Styled.NavigationValue>{item.title}</Styled.NavigationValue>
                            </Styled.NavigationItem>
                        );
                    })}
                </Styled.Navigation>
            </Styled.BottomContainer>
        </Styled.Container>
    );
};

export default FooterComponent;
