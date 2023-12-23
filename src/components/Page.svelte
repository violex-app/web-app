<script>
    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      Content,
      HeaderUtilities,
      HeaderGlobalAction,
    } from "carbon-components-svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import { authUser } from "../stores";
    import logo from '../statics/img/logo.png'

  </script>
  
  <Header platformName="Perfect Place to Practice Violin">
    <svelte:fragment slot="skip-to-content">    
      <img src={logo} alt="logo" width="38px" class="ml-3"/>
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Home" />
      <HeaderNavItem href="/" text="Explore" />
      <HeaderNavItem href="/" text="Profile" />
    </HeaderNav>

    <HeaderUtilities>
        <div class="user-email">
          {$authUser.email}
        </div>
        <HeaderGlobalAction icon={UserAvatarFilledAlt} />
    </HeaderUtilities>
  </Header>
  
  <Content>
    <slot></slot>
  </Content>
  

  <style>
    .user-email{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  </style>