<script>
  import {Route, Router} from "svelte-routing";
  import LandingRoute from "./routes/LandingRoute.svelte";
  import AuthRoute from "./routes/AuthRoute.svelte";
  import DashboardRoute from "./routes/DashboardRoute.svelte";
  import NotFoundRoute from "./routes/NotFoundRoute.svelte";
  import "carbon-components-svelte/css/g90.css";
</script>

<div class="dark:bg-gray-800">
  <Router>
    <Route path="/" component={LandingRoute}/>
    <Route path="/auth" component={AuthRoute}/>
    <Route path="/dashboard" component={DashboardRoute}/>
    <Route path="*" component={NotFoundRoute} />
  </Router>
</div>
