---
layout: "post"
title: "Treatment Effects at a Bunching Boundary"
date: "2024-03-16"
tags: ["econometrics", "bunching"]
excerpt: "The marginal slope of an observed outcome regression combines a causal response with selection."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/07/11/treatment-effects-at-an-overtime-notch/"]
---

<div class="note-content" markdown="0">

<p>The slope of an observed outcome regression combines a causal response with changing composition of the treated population. <span class="citation" data-cites="caetano_identification_2022"><a href="#ref-caetano_identification_2022" role="doc-biblioref">Caetano, Caetano, and Nielsen (2022)</a></span> use the latent choices pooled at a treatment boundary to identify the selection component under additional assumptions. The identifying calculation is a transformation of densities at a lower treatment boundary. The application below concerns TV watching and children’s skills.</p>

<h3 data-note-section="1" id="16-150-separate-response-and-selection">1. Separate response and selection</h3>
<p>For positive treatment values, let {% raw %}<span class="math inline">\(m(t)=\mathbb{E}[Y\mid T=t]\)</span>{% endraw %} and define the average marginal response {% raw %}<span class="math inline">\(\beta(t)=\mathbb{E}[Y&#x27;(t)\mid T=t]\)</span>{% endraw %}. Under differentiability and interchange-of-expectation conditions, write</p>

{% raw %}<div class="math display">\[
m&#x27;(t)=\beta(t)+u&#x27;(t),\qquad
B(t)=\int_0^t\beta(s)\,ds,\quad u(t)=m(t)-B(t).
\]</div>{% endraw %}
<p>At the boundary, use the limits from positive treatment: {% raw %}<span class="math inline">\(\beta(0)=\lim_{t\downarrow0}\beta(t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u(0)=m(0+)\)</span>{% endraw %}. These need not equal the marginal response or observed mean averaged over the entire atom at zero. Once {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} is defined, {% raw %}<span class="math inline">\(B(0)=0\)</span>{% endraw %} fixes the level of the decomposition. The observed regression {% raw %}<span class="math inline">\(m\)</span>{% endraw %} still reveals only the sum of the causal and selection derivatives.</p>

<h3 data-note-section="2" id="16-150-the-boundary-result">2. The boundary result</h3>
<p>Suppose {% raw %}<span class="math inline">\(T=\max(T^*,0)\)</span>{% endraw %} and extend the selection function to the censored latent range by {% raw %}<span class="math inline">\(u(t^*)=\mathbb{E}[Y(0)\mid T^*=t^*]\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t^*\leq0\)</span>{% endraw %}. Assume this extension is monotone and joins the positive-side selection function with the smoothness required below. This is an additional restriction on latent selection, not a consequence of decomposing the observed regression alone. Let {% raw %}<span class="math inline">\(V=u(T^*)\)</span>{% endraw %} among those with {% raw %}<span class="math inline">\(T=0\)</span>{% endraw %}.</p>

<div id="overtime-density" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the boundary smoothness, monotonicity, nondegeneracy, and deconvolution conditions described below (see also the sufficient model in <a href="#boundary-tv-application">Section 9</a>), the boundary response is identified by</p>

{% raw %}<div class="math display">\[
\beta(0)=m&#x27;(0+)-u&#x27;(0),
\]</div>{% endraw %}
<p>where, in the nonconstant-selection case,</p>

{% raw %}<div class="math display">\[
u&#x27;(0)=\operatorname{sgn}(u&#x27;(0))
\frac{f_{T^*\mid T=0}(0)}{f_{V\mid T=0}(u(0))},
\qquad
f_{T^*\mid T=0}(0)=\frac{f_T(0+)}{\Pr(T=0)}.
\]</div>{% endraw %}
</div>
<p>The last equality uses continuity of the latent density at zero. The numerator is identified from the observed atom and the density approaching it from above.</p>

<h3 data-note-section="3" id="16-150-why-a-density-ratio-gives-the-slope">3. Why a density ratio gives the slope</h3>
<p>For a monotone differentiable transformation {% raw %}<span class="math inline">\(v=u(t)\)</span>{% endraw %}, the change-of-variables formula is</p>

{% raw %}<div class="math display">\[
f_V(u(t))=\frac{f_{T^*}(t)}{|u&#x27;(t)|}.
\]</div>{% endraw %}
<p>Solving the change-of-variables formula gives the magnitude of the selection slope. The monotonicity and boundary-mean restrictions determine its sign. Both densities in the ratio must condition on the atom; using an unconditional density in only one place would introduce a probability-mass error.</p>

<h3 data-note-section="4" id="16-150-where-deconvolution-enters">4. Where deconvolution enters</h3>
<p>At {% raw %}<span class="math inline">\(T=0\)</span>{% endraw %}, observed outcomes mix the latent selection component {% raw %}<span class="math inline">\(V\)</span>{% endraw %} with outcome noise. The continuous-side limit identifies the noise law under the stipulated stability and independence conditions. If {% raw %}<span class="math inline">\(Y(0)=V+E\)</span>{% endraw %} with the required independence, characteristic functions satisfy</p>

{% raw %}<div class="math display">\[
\varphi_{Y\mid T=0}(s)=\varphi_{V\mid T=0}(s)\varphi_E(s).
\]</div>{% endraw %}
<p>The quotient recovers the selection characteristic function only when the deconvolution problem is identified. Fourier inversion needs its own regularity conditions, and zeros of {% raw %}<span class="math inline">\(\varphi_E\)</span>{% endraw %} cannot be divided out without justification.</p>

<p>The paper supplies conditions for the required density value and thus identifies the local response {% raw %}<span class="math inline">\(\beta(0)\)</span>{% endraw %}. It does not thereby identify the response at every treatment value. The <a href="{% post_url 2024-03-11-bunching-and-endogeneity-testing-identification-and-correction %}">endogeneity test</a> needs only the boundary mean contrast and avoids this density-recovery problem.</p>

<h3 data-note-section="5" id="16-150-deriving-the-selection-component-in-a-smooth-model">5. Deriving the selection component in a smooth model</h3>
<p>Suppose potential outcomes can be represented by a smooth function {% raw %}<span class="math inline">\(y(t,v)\)</span>{% endraw %}, with conditional latent-type density {% raw %}<span class="math inline">\(f(v\mid T=t)\)</span>{% endraw %}. Differentiating the observed mean gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
m&#x27;(t)
&amp;=\frac{d}{dt}\int y(t,v)f(v\mid T=t)\,dv\\
&amp;=\int\partial_t y(t,v)f(v\mid T=t)\,dv
+\int y(t,v)\partial_t f(v\mid T=t)\,dv.
\end{aligned}
\]</div>{% endraw %}
<p>The first integral averages causal derivatives among individuals observed at {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. The second holds their outcome function fixed and differentiates their type weights. Differentiability and domination are needed to pass the derivative through the integral.</p>

<p>When the conditional density is positive, the selection term can also be written as the expectation of {% raw %}<span class="math inline">\(y(t,V)\)</span>{% endraw %} times the conditional score {% raw %}<span class="math inline">\(\partial_t\log f(V\mid T=t)\)</span>{% endraw %}. That score has mean zero because the conditional density integrates to one. Selection therefore depends on how outcomes co-move with the changes in type weights as treatment varies.</p>

<h3 data-note-section="6" id="16-150-the-boundary-density-transformation-in-detail">6. The boundary density transformation in detail</h3>
<p>On the latent interval mapped to the atom, suppose {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is strictly increasing with nonzero derivative at zero. For {% raw %}<span class="math inline">\(v=u(t)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\Pr(V\leq u(t)\mid T=0)
=\Pr(T^*\leq t\mid T^*\leq0).
\]</div>{% endraw %}
<p>Differentiate with respect to {% raw %}<span class="math inline">\(t\)</span>{% endraw %} to obtain</p>

{% raw %}<div class="math display">\[
f_{V\mid T=0}(u(t))u&#x27;(t)
=f_{T^*\mid T=0}(t).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is decreasing, the event reverses direction and the derivative changes sign, giving the absolute derivative in the general change-of-variables formula. Evaluating at the one-sided boundary and solving yields the proposition’s ratio. The density at the boundary means the appropriate interior limit of the conditional density.</p>

<p>The conditional latent density is</p>

{% raw %}<div class="math display">\[
f_{T^*\mid T=0}(t)
=\frac{f_{T^*}(t)}{\Pr(T=0)},\qquad t&lt;0.
\]</div>{% endraw %}
<p>Continuity of {% raw %}<span class="math inline">\(f_{T^*}\)</span>{% endraw %} through zero and the fact that positive {% raw %}<span class="math inline">\(T\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(T^*\)</span>{% endraw %} imply {% raw %}<span class="math inline">\(f_{T^*}(0)=f_T(0+)\)</span>{% endraw %}. The atom probability is therefore essential in translating the observed positive-side density into the conditional density used in the ratio.</p>

<h3 data-note-section="7" id="16-150-a-case-where-every-quantity-can-be-checked">7. A case where every quantity can be checked</h3>
<p>Take {% raw %}<span class="math inline">\(T^*\)</span>{% endraw %} uniform on {% raw %}<span class="math inline">\([-a,b]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(a,b&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(u(t)=u_0+\lambda t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lambda\ne0\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\Pr(T=0)=\frac{a}{a+b},\qquad
f_T(0+)=\frac1{a+b},\qquad
f_{T^*\mid T=0}(0)=\frac1a.
\]</div>{% endraw %}
<p>Within the atom, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is uniform over an interval of length {% raw %}<span class="math inline">\(|\lambda|a\)</span>{% endraw %}, so its interior boundary density is {% raw %}<span class="math inline">\(1/(|\lambda|a)\)</span>{% endraw %}. The ratio equals {% raw %}<span class="math inline">\(|\lambda|\)</span>{% endraw %}, exactly the magnitude of the selection slope.</p>

<p>Also {% raw %}<span class="math inline">\(\mathbb{E}[V\mid T=0]=u_0-\lambda a/2\)</span>{% endraw %}. If the outcome noise has a common mean on the two sides, the continuous-side mean minus the atom mean is {% raw %}<span class="math inline">\(\lambda a/2\)</span>{% endraw %}, revealing the sign of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(m&#x27;(0+)=b_0+\lambda\)</span>{% endraw %}, subtracting the identified selection slope recovers the causal boundary response {% raw %}<span class="math inline">\(b_0\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is constant on the censored region, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a point mass and this density-ratio formula is not applicable. That case must be handled separately: the selection slope is zero under the corresponding smooth continuation assumptions. Plugging an undefined density into the nonconstant formula would not constitute identification.</p>

<h3 data-note-section="8" id="16-150-deconvolution-identifies-a-distribution-before-estimating-a-slope">8. Deconvolution identifies a distribution before estimating a slope</h3>
<p>Under the additive independent-noise representation within the atom,</p>

{% raw %}<div class="math display">\[
\varphi_V(s)=\frac{\varphi_{Y\mid T=0}(s)}{\varphi_E(s)}.
\]</div>{% endraw %}
<p>If the quotient is integrable, Fourier inversion gives</p>

{% raw %}<div class="math display">\[
f_V(v)=\frac1{2\pi}\int_{\mathbb R}e^{-isv}
\frac{\varphi_{Y\mid T=0}(s)}{\varphi_E(s)}\,ds.
\]</div>{% endraw %}
<p>The inversion uses two pieces of information: the outcome distribution at the atom and the noise law recovered through the continuous-side stability assumptions. One observed convolution cannot generally separate two unknown factors. Other inversion conditions are possible, but they must establish that separation.</p>

<p>Even when {% raw %}<span class="math inline">\(\varphi_E\)</span>{% endraw %} has no zeros, estimation can be ill-conditioned. For Gaussian noise with variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}, division multiplies high-frequency error by {% raw %}<span class="math inline">\(e^{\sigma^2s^2/2}\)</span>{% endraw %}. A regularized estimator truncates or smooths high frequencies, creating a bias-variance tradeoff. Identification of {% raw %}<span class="math inline">\(f_V\)</span>{% endraw %} does not imply that its boundary value can be estimated at a parametric rate.</p>

<p>A frequency cutoff makes the instability quantitative. Temporarily suppose the noise characteristic function is known and Gaussian, and estimate {% raw %}<span class="math inline">\(\varphi_{Y\mid T=0}\)</span>{% endraw %} from {% raw %}<span class="math inline">\(n_0\)</span>{% endraw %} independent observations at the atom. At each frequency, the empirical characteristic function has expected absolute error at most {% raw %}<span class="math inline">\(n_0^{-1/2}\)</span>{% endraw %}. For the Fourier integral truncated at {% raw %}<span class="math inline">\(|s|\leq T\)</span>{% endraw %}, Fubini and the triangle inequality give</p>

{% raw %}<div class="math display">\[
\mathbb{E}|\widehat f_{V,T}(v)-f_{V,T}(v)|
\leq\frac1{2\pi\sqrt{n_0}}\int_{-T}^T e^{\sigma^2s^2/2}\,ds
\leq\frac{T e^{\sigma^2T^2/2}}{\pi\sqrt{n_0}}.
\]</div>{% endraw %}
<p>The omitted Fourier tail is a separate approximation error. Taking {% raw %}<span class="math inline">\(T=c\sqrt{\log n_0}\)</span>{% endraw %} makes the displayed stochastic bound of order {% raw %}<span class="math inline">\(\sqrt{\log n_0}\,n_0^{(\sigma^2c^2-1)/2}\)</span>{% endraw %}, which vanishes if {% raw %}<span class="math inline">\(\sigma^2c^2&lt;1\)</span>{% endraw %}. How quickly the truncation bias vanishes depends on the regularity of the selection density. Estimating the noise distribution adds another error beyond this illustrative known-noise calculation.</p>

<p>The formula identifies a derivative by relating density near the latent boundary to density after transformation. Observation noise smooths that distribution. Undoing the smoothing amplifies high-frequency estimation error, explaining why exact identification need not lead to precise estimation.</p>

<p>If the densities are positive and differentiable near the evaluation point, the local error in the magnitude {% raw %}<span class="math inline">\(s=|u&#x27;(0)|=f_T(0+)/[\pi_0f_V(u_0)]\)</span>{% endraw %} also obeys the differential identity</p>

{% raw %}<div class="math display">\[
\frac{ds}{s}
=\frac{df_T}{f_T}-\frac{d\pi_0}{\pi_0}
-\frac{df_V(u_0)}{f_V(u_0)}
-\frac{f_V&#x27;(u_0)}{f_V(u_0)}\,du_0.
\]</div>{% endraw %}
<p>The differential {% raw %}<span class="math inline">\(df_V(u_0)\)</span>{% endraw %} measures density-estimation error with the evaluation point held fixed. The final term accounts for estimating the point itself. Both contribute to the recovered slope’s uncertainty.</p>

<p>The recovered magnitude divides {% raw %}<span class="math inline">\(f_T(0+)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\Pr(T=0)f_V(u(0))\)</span>{% endraw %}, evaluated at the estimated point {% raw %}<span class="math inline">\(u(0)\)</span>{% endraw %}. Small denominator density magnifies errors in every component. Implementing the boundary identification result therefore requires derivative, density, and deconvolution estimation, in addition to the structural assumptions.</p>

<h3 id="16-150-connecting-the-latent-and-observed-derivatives-at-zero">Connecting the latent and observed derivatives at zero</h3>
<p>Let {% raw %}<span class="math inline">\(H(t,s)=\mathbb E[Y(t)\mid T^*=s]\)</span>{% endraw %} be continuously differentiable near {% raw %}<span class="math inline">\((0,0)\)</span>{% endraw %}, with differentiation under the conditional expectation justified. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(m(t)=H(t,t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta(t)=\partial_1H(t,t)\)</span>{% endraw %}. The chain rule gives</p>
{% raw %}<div class="math display">\[
u&#39;(t)=m&#39;(t)-\beta(t)=\partial_2H(t,t).
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(s\leq0\)</span>{% endraw %}, the latent extension is {% raw %}<span class="math inline">\(u(s)=H(0,s)\)</span>{% endraw %}, so its left derivative at zero is {% raw %}<span class="math inline">\(\partial_2H(0,0)\)</span>{% endraw %}. Continuity therefore matches this derivative to {% raw %}<span class="math inline">\(u&#39;(0+)\)</span>{% endraw %} from the observed positive side. In contrast, the observed atom mean is</p>
{% raw %}<div class="math display">\[
\mathbb E[Y\mid T=0]=\mathbb E[H(0,T^*)\mid T^*\leq0],
\]</div>{% endraw %}
<p>which averages the whole censored range and generally differs from {% raw %}<span class="math inline">\(H(0,0)=m(0+)\)</span>{% endraw %}. The density transformation recovers the slope at the edge of that range. It does not replace the boundary causal response by an average over all censored individuals.</p>

<h3 data-note-section="9" id="boundary-tv-application">9. A corner-bunching application: TV watching and skills</h3>
<p><a href="https://www.aeaweb.org/conference/2023/program/paper/Sdi85hYi">Caetano, Caetano, and Nielsen (April 2022, §5)</a> study children’s cognitive and non-cognitive skills as outcomes and weekly hours of TV watching as treatment, using the PSID Child Development Supplement. The relevant boundary is zero hours. Their paper’s overtime reference is to a separate study by Goff; it is not this application.</p>
<p>The distinction matters mathematically. For a covered worker paid a fixed hourly rate {% raw %}<span class="math inline">\(w\)</span>{% endraw %} and a time-and-a-half premium beyond 40 hours, the usual overtime schedule has the form</p>
{% raw %}<div class="math display">\[
C(h)=w\min(h,40)+1.5w(h-40)_+.
\]</div>{% endraw %}
<p>The <a href="https://www.dol.gov/agencies/whd/overtime">Department of Labor’s description of the federal overtime rule</a> supplies this premium for nonexempt covered workers. In this simple schedule, total compensation is continuous at 40 and its slope changes: this is a kink, not a notch. Replacing total hours by {% raw %}<span class="math inline">\((h-40)_+\)</span>{% endraw %} would pool every observation below 40, and would require the outcome to depend on hours only through that recoded treatment. Neither the premium rule nor the recoding establishes the latent smoothness and deconvolution conditions used here. The present result concerns a lower boundary of actual treatment.</p>
<p>For the TV example, write {% raw %}<span class="math inline">\(T_i\)</span>{% endraw %} for observed weekly hours and {% raw %}<span class="math inline">\(Y_i(t)\)</span>{% endraw %} for a skill score under {% raw %}<span class="math inline">\(t\)</span>{% endraw %} hours. A simple illustrative choice problem makes the boundary representation explicit:</p>
{% raw %}<div class="math display">\[
\max_{t\geq0}\{a_i t-t^2/2\}.
\]</div>{% endraw %}
<p>Its unconstrained optimum is {% raw %}<span class="math inline">\(T_i^*=a_i\)</span>{% endraw %}; strict concavity and the first-order condition give {% raw %}<span class="math inline">\(T_i=\max(a_i,0)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(a_i\)</span>{% endraw %} has positive probability below zero, households with negative net inclination to watch TV choose zero. The objective is an illustration, not a utility specification estimated in the paper. Negative {% raw %}<span class="math inline">\(T_i^*\)</span>{% endraw %} indexes heterogeneity at the corner; it is not negative observed TV time. The treatment entering {% raw %}<span class="math inline">\(Y_i(t)\)</span>{% endraw %} is fully observed, even though the latent index is censored by the choice rule.</p>
<p>In this interpretation, {% raw %}<span class="math inline">\(\beta(0)\)</span>{% endraw %} is the limiting skill-score response per additional weekly hour among children marginally selecting into positive TV time. It is a derivative at zero, not the effect of a discrete move from zero to one hour and not an average over all children who watch no TV. The selection derivative {% raw %}<span class="math inline">\(u&#39;(0)\)</span>{% endraw %} measures how the zero-treatment skill mean changes with the latent index at that boundary.</p>
<p>One transparent sufficient model for the density calculation is</p>
{% raw %}<div class="math display">\[
Y_i(t)=g(t)+v(T_i^*)+E_i,\qquad
g(0)=0,\quad \mathbb EE_i=0,\quad E_i\perp T_i^*.
\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is continuously differentiable near zero, {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is continuously differentiable across zero and strictly monotone on the negative latent support, and {% raw %}<span class="math inline">\(v&#39;(0)\ne0\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(T^*\)</span>{% endraw %} has a density continuous and positive at zero, {% raw %}<span class="math inline">\(0&lt;\pi_0=P(T=0)&lt;1\)</span>{% endraw %}, and the relevant means are finite. Require the conditional density of {% raw %}<span class="math inline">\(v(T^*)\)</span>{% endraw %} within the atom to have a finite positive interior limit at {% raw %}<span class="math inline">\(v(0)\)</span>{% endraw %}. Finally, require {% raw %}<span class="math inline">\(\varphi_E(s)\ne0\)</span>{% endraw %} for every real {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. These are sufficient restrictions for this illustration, stronger than a generic smooth potential-outcome model; the existence of the atom alone does not imply them.</p>
<p>Here {% raw %}<span class="math inline">\(m(t)=g(t)+v(t)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\beta(t)=g&#39;(t)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(u=v\)</span>{% endraw %}. The residual distribution {% raw %}<span class="math inline">\(Y-m(t)\mid T=t\)</span>{% endraw %} equals the law of {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, so observations with arbitrarily small positive treatment identify its limiting law. Outcomes within the atom identify the convolution of that law with {% raw %}<span class="math inline">\(V=v(T^*)\mid T=0\)</span>{% endraw %}. Dividing their characteristic functions identifies the law of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}; its continuous interior density and boundary limit then identify the denominator in Proposition 1. The atom frequency and the positive-side treatment density identify {% raw %}<span class="math inline">\(f_T(0+)/\pi_0\)</span>{% endraw %}. Thus the two density values use different observed groups and the noise-stability restriction connects them.</p>
<p>The sign is also observable under these restrictions. Since {% raw %}<span class="math inline">\(\mathbb E[Y\mid T=0]=\mathbb E[v(T^*)\mid T^*\leq0]\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\Delta=m(0+)-\mathbb E[Y\mid T=0]
=v(0)-\mathbb E[v(T^*)\mid T^*\leq0].
\]</div>{% endraw %}
<p>For increasing {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, strict monotonicity and positive latent density just below zero make {% raw %}<span class="math inline">\(\Delta&gt;0\)</span>{% endraw %}; for decreasing {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, they make {% raw %}<span class="math inline">\(\Delta&lt;0\)</span>{% endraw %}. Its sign agrees with {% raw %}<span class="math inline">\(v&#39;(0)\ne0\)</span>{% endraw %}. Subtracting the signed density ratio from {% raw %}<span class="math inline">\(m&#39;(0+)\)</span>{% endraw %} consequently identifies {% raw %}<span class="math inline">\(g&#39;(0)\)</span>{% endraw %}.</p>
<p>For a worked calculation, specialize the uniform-index example in Section 7 to {% raw %}<span class="math inline">\(g(t)=b_0t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(v(t)=u_0+\lambda t\)</span>{% endraw %}, and independent {% raw %}<span class="math inline">\(E\sim\mathcal N(0,\sigma^2)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}. These choices satisfy the stated sufficient conditions when {% raw %}<span class="math inline">\(\lambda\ne0\)</span>{% endraw %}. The two observed groups have</p>
{% raw %}<div class="math display">\[
\begin{aligned}
Y\mid T=t&amp;=u_0+(b_0+\lambda)t+E &amp;&amp;(t&gt;0),\\
Y\mid T=0&amp;=u_0+\lambda U+E,
\qquad U\sim\operatorname{Unif}[-a,0],\quad U\perp E.
\end{aligned}
\]</div>{% endraw %}
<p>The continuous-side residual law is Gaussian with nonvanishing characteristic function. Deconvolution at the atom identifies the uniform selection law, whose interior endpoint density is {% raw %}<span class="math inline">\(1/(|\lambda|a)\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[
\beta(0)=(b_0+\lambda)
-\operatorname{sgn}(\Delta)\frac{1/a}{1/(|\lambda|a)}=b_0,
\qquad \Delta=\lambda a/2.
\]</div>{% endraw %}
<p>This calculation illustrates identification without reporting an empirical estimate. It also clarifies an endpoint issue in Section 8: the uniform selection density jumps at its support endpoint, and its characteristic function is not absolutely integrable. Direct Fourier inversion exactly at that endpoint is not justified by the sufficient integrability condition stated there. Recover the distribution first and use the limit of its density from inside the support, or equivalently the limit of one-sided difference quotients of its cdf. That is the boundary density required by the change-of-variables argument.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-caetano_identification_2022" class="csl-entry" role="listitem">
Caetano, Carolina, Gregorio Caetano, and Eric Nielsen. 2022. <span>“Identification and Estimation of Average Marginal Treatment Effects with a Bunching Design.”</span> April manuscript, §3, Theorems 3.2–3.3 and Lemmas 1–3; application in §5. <a href="https://www.aeaweb.org/conference/2023/program/paper/Sdi85hYi">Author manuscript hosted by the AEA</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-11-bunching-and-endogeneity-testing-identification-and-correction %}">Bunching and Endogeneity: Testing, Identification, and Correction</a> · Next: <a href="{% post_url 2024-06-10-estimating-elasticities-under-nonlinear-budget-sets %}">Estimating Elasticities under Nonlinear Budget Sets</a></p></nav>

</div>
