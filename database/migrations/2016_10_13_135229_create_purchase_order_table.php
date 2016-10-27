<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function ( Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('store_id')->default(0);
            $table->unsignedBigInteger('supplier_id')->default(0);
            $table->unsignedBigInteger('warehouse_id')->default(0);
            $table->unsignedBigInteger('vendor_trucking_id')->default(0);
            $table->string('code')->nullable();
            $table->string('po_type')->nullable();
            $table->date('po_created')->nullable();
            $table->date('shipping_date')->nullable();
            $table->string('supplier_type')->nullable();
            $table->string('walk_in_supplier')->nullable();
            $table->string('walk_in_supplier_detail')->nullable();
            $table->string('remarks')->nullable();
            $table->string('status')->nullable();
            $table->unsignedBigInteger('created_by')->default(0);
            $table->unsignedBigInteger('updated_by')->default(0);
            $table->unsignedBigInteger('deleted_by')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('purchase_orders');
    }
}
