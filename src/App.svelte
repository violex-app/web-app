<script>
  import {Route, Router} from "svelte-routing";
  import LandingRoute from "./routes/LandingRoute.svelte";
  import DashboardRoute from "./routes/DashboardRoute.svelte";
  import NotFoundRoute from "./routes/NotFoundRoute.svelte";

</script>

<div class="dark:bg-gray-800">
  <Router>
    <Route path="/" component={LandingRoute}/>
    <Route path="/dashboard" component={DashboardRoute}/>
    <Route path="*" component={NotFoundRoute} />
  </Router>
</div>
