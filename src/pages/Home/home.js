import styled from "styled-components";

export const Container = styled.header`
   h1{
        font: 500 35px "Poppins", sans-serif;
        margin: 20px 0 0 20px;
        color: ${props => props.theme.colors.logo};
        }
    span{
        margin-left: 43px;
        color: ${props => props.theme.colors.subLogo};
        opacity: .9;
        font: 300 18px "Patrick Hand", sans-serif;
    }
    div{

        .switch{
            position: relative;
            bottom: 70px;
            margin-left: 990px;
        }
        nav{
            ul{
                position: relative;
                display: flex;
                flex-direction: row;
                float: right;
                margin-right: 50px;
                bottom: 105px;

                button{
                    display: flex;
                    background: transparent;
                    gap: 20px;

                    li{
                    display: flex;
                    list-style: none;
                    color: ${props => props.theme.colors.text};
                    opacity: .7;
                    margin-left: 20px;
                    transition: all 0.6s;

                    &:hover{
                        opacity: 1;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

main{
    .body{
        position: relative;
        bottom: 20px;
        width: 1140px;
        border-radius: 20px;
        height: 440px;
        background: ${props => props.theme.colors.secondary};
        margin: 0 auto;

        h2{
            position: relative;
            top: 40px;
            margin-left: 100px;
            font: 400 30px "Poppins", sans-serif;
            color: ${props => props.theme.colors.textBody};

            &::after{
                position: absolute;
                content: "";
                height: 1.5px;
                width: 250px;
                background: ${props => props.theme.colors.textBody};
                top: 80px;
                margin-left: -260px;
            }
        }

        small{
            position: relative;
            bottom: 180px;
            left: 60px;
            font: 400 16px "Poppins", sans-serif;
            color: ${props => props.theme.colors.logo}
        }   

        img{
            width: 400px;
            margin-top: 10px;
            border-radius: 10px;
            margin-left: 250px
        }

        button{
            position: relative;
            left: 160px;
            bottom: 20px;
            background: ${props => props.theme.colors.button};
            border-radius: 20px;
            color: var(--white-200);
            width: 150px;
            padding: 7px;
            transition: all 0.6s;

            &:hover{
                filter: brightness(0.8);
            }
        }
    }
}
`