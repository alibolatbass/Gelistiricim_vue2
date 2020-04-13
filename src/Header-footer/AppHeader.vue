<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>




            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Eğitimler</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">JAVA</router-link>
                    <router-link to="/" class="dropdown-item">C++</router-link>
                    <router-link to="/" class="dropdown-item">JavaScript</router-link>

                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Makaleler</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">Araştırma</router-link>
                    <router-link to="/" class="dropdown-item">Soru-Cevap</router-link>
                    <router-link to="/" class="dropdown-item">Tartışma</router-link>

                </base-dropdown>


            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href=""
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>

                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Üyelik İşlemleri</span>
                    </a>

                    <router-link to="/login" class="dropdown-item">Giriş Yap</router-link>
                    <router-link to="/register" class="dropdown-item">Kayıt Ol</router-link>
                    <router-link to="/profile" class="dropdown-item">Profil</router-link>
                </base-dropdown>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/2.SeviyeComponents/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
