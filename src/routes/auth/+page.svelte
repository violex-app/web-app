<script>
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import { firebaseAuth } from '$lib/firebase';
    import { authUser } from '$lib/stores';
	import { goto } from '$app/navigation';

    let email = "";
    let password = "";

    let is_registering = false;
    let error_msg = "";
    let success = false;

    const register = () => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            login();
        })
        .catch((error) => {
            const errorCode = error.code;
            error_msg = error.message.replace("Firebase: ", '');;
            console.log(errorCode, error_msg);
    
            success = false;
        });
    };

    const login = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            $authUser = {
                uid: userCredential.user.uid,
                email: userCredential.user.email || ''
            };
            goto("/dashboard");
        })
        .catch((error) => {
            const errorCode = error.code;
            error_msg = error.message.replace("Firebase: ", '');;
            console.log(errorCode, error_msg);

            success = false;
        });
    };
</script>


<div class="h-full flex justify-center items-center">
    <div class="card !bg-transparent custom-card p-4">
        {#if is_registering}
            <div class="grid gap-y-2">
                <h1 class="mb-3">Register</h1>
                <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    required
                    bind:value={email}
                />
                <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    required
                    bind:value={password}
                />
                <div class="text-end">
                    <button type="button" class="btn variant-ghost" on:click={register}>Register</button>
                </div>

                <p class="mt-5 mb-2 error" style="color: brown;">{error_msg}</p>

                <span>Already registered? 
                    <button class="link" on:click={()=>{is_registering=false;}}>
                        <span class="">Login</span>
                    </button>
                </span>
            </div>

        {:else}
            <div class="grid gap-y-2" >
                <h1 class="mb-3">Login</h1>
                <input 
                    class="input"
                    type="email"
                    placeholder="Email"
                    required
                    bind:value={email}
                />
                <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    required
                    bind:value={password}
                />
                <div class="text-end">
                    <button type="button" class="btn variant-ghost" on:click={login}>Login</button>
                </div>
                
                <p class="mt-5 mb-2 error" style="color: brown;">{error_msg}</p>

                <span>Not registered yet? 
                    <button class="link" on:click={()=>{is_registering=true;}}>
                        <span class="">Sign-up</span>
                    </button>
                </span>
            </div>
        {/if}
    </div>
</div>


<style>
    .custom-card{
        min-width: 40%;
    }
</style>