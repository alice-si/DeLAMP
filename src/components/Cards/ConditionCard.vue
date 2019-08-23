<template>
  <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon>store</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Brexit</p>
                    <h3 class="title">
                        Will the Brexit happen in 2019
                    </h3>

                    <nav-tabs-table></nav-tabs-table>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Reported by: 0x00000
                    </div>
                </template>
            </stats-card>
        </div>
</template>

<script>
export default {
  name: 'condition-card'
}
</script>
