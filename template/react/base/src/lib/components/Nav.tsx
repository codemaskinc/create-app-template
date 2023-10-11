import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Images } from 'assets'
import { Language } from 'lib/locale'
import { ThemeMode } from 'lib/themes'
import { PathNames } from 'lib/routing'
import { useTranslations } from 'lib/hooks'
import { useLocaleStore, useThemeStore } from 'lib/stores'

type LogoProps = {
    isDarkMode: boolean
}

export const Nav: React.FunctionComponent = () => {
    const T = useTranslations()
    const navigate = useNavigate()
    const { themeState: { themeMode, isDarkMode }, themeActions: { setThemeMode } } = useThemeStore()
    const { localeState: { languageTag }, localeActions: { setLanguage } } = useLocaleStore()

    return (
        <Navigation>
            {Object.values(PathNames).map(pathname => (
                <NavItem
                    key={pathname}
                    onClick={() => navigate(pathname)}
                >
                    {T.components.nav[pathname]}
                </NavItem>
            ))}
            <Logo
                src={Images.codemask}
                isDarkMode={isDarkMode}
            />
            <NavItem onClick={() => setLanguage(languageTag === Language.en_US ? Language.pl_PL : Language.en_US)}>
                {T.components.nav.currentLanguage}
            </NavItem>
            <NavItem onClick={() => setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark)}>
                {T.components.nav[themeMode]}
            </NavItem>
        </Navigation>
    )
}

const Navigation = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 16px;
    border-bottom: 1px solid ${props => props.theme.layout.border};

    & > *::selection {
        background-color: transparent;
    }
`

const NavItem = styled.div`
    color: ${props => props.theme.typography.regular};
    font-size: 32px;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
        color: ${props => props.theme.accent.accent100};
    }
`

const Logo = styled.img<LogoProps>`
    margin: 0 auto;
    height: 100%;
    width: auto;

    ${props => !props.isDarkMode ? `
        filter: invert(1);
    ` : ''}
`
