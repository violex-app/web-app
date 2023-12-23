<script>
    
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import { firebaseAuth } from '../lib/firebase';
    import { TextInput, Button, ToastNotification } from 'carbon-components-svelte';
    import { ArrowRight } from 'carbon-icons-svelte';
    import { navigate } from 'svelte-routing';

    let is_registering = true;
    
    let email="";
    let password="";
    let auth_message=" ";

    let success = undefined;
    
    const register = () => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            login();
        })
        .catch((error) => {
            const errorCode = error.code;
            auth_message = error.message.replace("Firebase: ", '');;
            console.log(errorCode, auth_message);
    
            success = false;
        });
    };

    const login = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            navigate("/dashboard");
        })
        .catch((error) => {
            const errorCode = error.code;
            auth_message = error.message.replace("Firebase: ", '');;
            console.log(errorCode, auth_message);

            success = false;
        });
    };
</script>

<div class="auth-route">
    <div class="custom-form">
        {#if is_registering}
            <div class="custom-card">
                <h1 class="mb-3">Register</h1>
                <TextInput
                    type="email"
                    placeholder="Email"
                    required
                    bind:value={email}
                />
                <TextInput
                    type="password"
                    placeholder="Password"
                    required
                    bind:value={password}
                />
                <div class="button-container">    
                    <Button type="submit" icon={ArrowRight} on:click={register}>Register</Button>
                </div>

                <p>Already registered? <a on:click={()=>{is_registering=false;}}>Login</a></p>

                <p class="mt-5 error" style={success ? "color: green;" : "color: brown;"}>{auth_message}</p>
            </div>

        {:else}

            <div class="custom-card" >
                <h1 class="mb-3">Login</h1>
                <TextInput
                    type="email"
                    placeholder="Email"
                    required
                    bind:value={email}
                />
                <TextInput
                    type="password"
                    placeholder="Password"
                    required
                    bind:value={password}
                />
                <div class="button-container">
                    <Button type="submit" icon={ArrowRight} on:click={login}>Login</Button>
                </div>

                <p>Don't have an account? <a on:click={()=>{is_registering=true;}}>Register</a></p>

                <p class="mt-5 error" style={success ? "color: green;" : "color: brown;"}>{auth_message}</p>
            </div>
        {/if}
    </div>
    <div class="custom-footer">
        All rights reserved - Violex
    </div>
</div>
    
<style>
    .auth-route {
        min-height: 100vh;
    }
    .custom-footer{
        text-align: center;
        color: gray;
    }
    .custom-form{
        display: flex;
        justify-content: center;
        min-height: 85vh;
        align-items: center;
    }
    .custom-card{
        min-width: 40%;
        border-radius: 0px;
    }
    .button-container {
        text-align: right;
    }
</style>